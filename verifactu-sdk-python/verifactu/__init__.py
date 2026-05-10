import requests
from typing import Optional, List, Dict, Any
from dataclasses import dataclass


class VeriFactuError(Exception):
    def __init__(self, message: str, status_code: Optional[int] = None):
        self.message = message
        self.status_code = status_code
        super().__init__(self.message)


@dataclass
class Invoice:
    id: str
    external_id: str
    series: str
    number: int
    date: str
    total: float
    vat: float
    status: str
    emitter_name: str
    receiver_name: str


@dataclass
class UserStats:
    plan: str
    invoices_used: int
    invoices_limit: int
    nifs_allowed: int
    nifs_limit: int
    api_keys_count: int
    total_invoices: int


class VeriFactu:
    def __init__(self, api_key: str, base_url: str = "https://api.verifactu.dev"):
        self.api_key = api_key
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        })

    def _request(self, method: str, endpoint: str, **kwargs) -> Dict[Any, Any]:
        url = f"{self.base_url}{endpoint}"
        try:
            response = self.session.request(method, url, **kwargs)
            response.raise_for_status()
            return response.json()
        except requests.HTTPError as e:
            error_data = e.response.json() if e.response else {}
            raise VeriFactuError(
                error_data.get("error", str(e)),
                e.response.status_code if e.response else None
            )
        except requests.RequestException as e:
            raise VeriFactuError(str(e))

    # Health Check
    def health(self) -> Dict[str, str]:
        """Check API health status"""
        return self._request("GET", "/api/v1/health")

    # Invoices
    def create_invoice(
        self,
        emitter_nif: str,
        emitter_name: str,
        receiver_nif: str,
        receiver_name: str,
        lines: List[Dict[str, Any]],
        series: Optional[str] = None,
        date: Optional[str] = None
    ) -> Invoice:
        """Create a new invoice"""
        data = {
            "emitter": {"nif": emitter_nif, "name": emitter_name},
            "receiver": {"nif": receiver_nif, "name": receiver_name},
            "lines": lines,
        }
        if series:
            data["series"] = series
        if date:
            data["date"] = date

        result = self._request("POST", "/api/v1/invoices", json=data)
        inv = result
        return Invoice(
            id=inv["id"],
            external_id=inv["externalId"],
            series=inv["series"],
            number=inv["number"],
            date=inv["date"],
            total=inv["total"],
            vat=inv["vat"],
            status=inv["status"],
            emitter_name=emitter_name,
            receiver_name=receiver_name,
        )

    def list_invoices(self, limit: int = 50, offset: int = 0) -> List[Invoice]:
        """List all invoices"""
        result = self._request("GET", "/api/v1/invoices", params={"limit": limit, "offset": offset})
        invoices = []
        for inv in result.get("invoices", []):
            invoices.append(Invoice(
                id=inv["id"],
                external_id=inv.get("externalId", ""),
                series=inv["series"],
                number=inv["number"],
                date=inv["date"],
                total=inv["total"],
                vat=inv["vat"],
                status=inv["status"],
                emitter_name=inv.get("emitterName", ""),
                receiver_name=inv.get("receiverName", ""),
            ))
        return invoices

    def get_invoice(self, invoice_id: str) -> Invoice:
        """Get a specific invoice"""
        result = self._request("GET", f"/api/v1/invoices/{invoice_id}")
        inv = result["invoice"]
        return Invoice(
            id=inv["id"],
            external_id=inv.get("externalId", ""),
            series=inv["series"],
            number=inv["number"],
            date=inv["date"],
            total=inv["total"],
            vat=inv["vat"],
            status=inv["status"],
            emitter_name=inv.get("emitterName", ""),
            receiver_name=inv.get("receiverName", ""),
        )

    def cancel_invoice(self, invoice_id: str) -> Invoice:
        """Cancel an invoice"""
        result = self._request("POST", f"/api/v1/invoices/{invoice_id}", json={"action": "cancel"})
        inv = result["invoice"]
        return Invoice(
            id=inv["id"],
            external_id=inv.get("externalId", ""),
            series=inv["series"],
            number=inv["number"],
            date=inv["date"],
            total=inv["total"],
            vat=inv["vat"],
            status=inv["status"],
            emitter_name=inv.get("emitterName", ""),
            receiver_name=inv.get("receiverName", ""),
        )


# Auth functions (server-side)
def register(email: str, password: str, name: Optional[str] = None, base_url: str = "https://api.verifactu.dev") -> Dict[str, Any]:
    """Register a new user"""
    response = requests.post(f"{base_url}/api/auth/register", json={
        "email": email,
        "password": password,
        "name": name,
    })
    response.raise_for_status()
    return response.json()


def login(email: str, password: str, base_url: str = "https://api.verifactu.dev") -> Dict[str, Any]:
    """Login and get access token"""
    response = requests.post(f"{base_url}/api/auth/login", json={
        "email": email,
        "password": password,
    })
    response.raise_for_status()
    return response.json()