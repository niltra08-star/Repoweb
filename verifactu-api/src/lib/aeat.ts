export interface AEATInvoice {
  Cabecera: {
    IDVersion: string;
    Algoritmo: string;
  };
  Factura: {
    Emitida: {
      NIF: string;
      NombreRazon: string;
      FacXML?: string;
      SerieFactura: string;
      NumFactura: string;
      FechaExp: string;
      FechaRegContable?: string;
      CodigoAccountingSupplier?: string;
      AccountingSupplier?: string;
    };
    Receptor: {
      NIF: string;
      NombreRazon: string;
      Direccion?: {
        Direccion: string;
        CodigoPostal: string;
        Provincia?: string;
        Pais?: string;
      };
      Destino?: string;
      ReceptorFactura?: string;
    };
    Lineas: Array<{
      NumLinea: number;
      Descripcion: string;
      Cantidad: number;
      ImporteUnitario: number;
      ImporteTotal: number;
      DetalleIVA: {
        TipoImpositivo: number;
        BaseImponible: number;
        CuotaImpuesto: number;
      };
    }>;
    Totales: {
      BaseImponible: number;
      CuotaTotal: number;
      ImporteTotal: number;
      TotalIrpf?: number;
      TotalRecargoEquivalencia?: number;
    };
  };
}

export function createInvoiceXML(invoice: AEATInvoice): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
< raiz xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" >
  <Cabecera>
    <IDVersion>${invoice.Cabecera.IDVersion}</IDVersion>
    <Algoritmo>${invoice.Cabecera.Algoritmo}</Algoritmo>
  </Cabecera>
  <Factura>
    <Emitida>
      <NIF>${invoice.Factura.Emitida.NIF}</NIF>
      <NombreRazon>${escapeXML(invoice.Factura.Emitida.NombreRazon)}</NombreRazon>
      <SerieFactura>${invoice.Factura.Emitida.SerieFactura}</SerieFactura>
      <NumFactura>${invoice.Factura.Emitida.NumFactura}</NumFactura>
      <FechaExp>${invoice.Factura.Emitida.FechaExp}</FechaExp>
      ${invoice.Factura.Emitida.FechaRegContable ? `<FechaRegContable>${invoice.Factura.Emitida.FechaRegContable}</FechaRegContable>` : ''}
    </Emitida>
    <Receptor>
      <NIF>${invoice.Factura.Receptor.NIF}</NIF>
      <NombreRazon>${escapeXML(invoice.Factura.Receptor.NombreRazon)}</NombreRazon>
      ${invoice.Factura.Receptor.Direccion ? `
      <Direccion>
        <Direccion>${escapeXML(invoice.Factura.Receptor.Direccion.Direccion)}</Direccion>
        <CodigoPostal>${invoice.Factura.Receptor.Direccion.CodigoPostal}</CodigoPostal>
        ${invoice.Factura.Receptor.Direccion.Provincia ? `<Provincia>${invoice.Factura.Receptor.Direccion.Provincia}</Provincia>` : ''}
        ${invoice.Factura.Receptor.Direccion.Pais ? `<Pais>${invoice.Factura.Receptor.Direccion.Pais}</Pais>` : ''}
      </Direccion>` : ''}
    </Receptor>
    <LineasFactura>
      ${invoice.Factura.Lineas.map(linea => `
      <Linea>
        <NumLinea>${linea.NumLinea}</NumLinea>
        <Descripcion>${escapeXML(linea.Descripcion)}</Descripcion>
        <Cantidad>${linea.Cantidad}</Cantidad>
        <ImporteUnitario>${linea.ImporteUnitario}</ImporteUnitario>
        <ImporteTotal>${linea.ImporteTotal}</ImporteTotal>
        <DetalleIVA>
          <TipoImpositivo>${linea.DetalleIVA.TipoImpositivo}</TipoImpositivo>
          <BaseImponible>${linea.DetalleIVA.BaseImponible}</BaseImponible>
          <CuotaImpuesto>${linea.DetalleIVA.CuotaImpuesto}</CuotaImpuesto>
        </DetalleIVA>
      </Linea>`).join('')}
    </LineasFactura>
    <Totales>
      <BaseImponible>${invoice.Factura.Totales.BaseImponible}</BaseImponible>
      <CuotaTotal>${invoice.Factura.Totales.CuotaTotal}</CuotaTotal>
      <ImporteTotal>${invoice.Factura.Totales.ImporteTotal}</ImporteTotal>
      ${invoice.Factura.Totales.TotalIrpf ? `<TotalIrpf>${invoice.Factura.Totales.TotalIrpf}</TotalIrpf>` : ''}
      ${invoice.Factura.Totales.TotalRecargoEquivalencia ? `<TotalRecargoEquivalencia>${invoice.Factura.Totales.TotalRecargoEquivalencia}</TotalRecargoEquivalencia>` : ''}
    </Totales>
  </Factura>
</raiz>`;

  return xml;
}

function escapeXML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function calculateSignature(xml: string): string {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(xml).digest('hex').toUpperCase();
}

export function createSOAPEnvelope(invoiceXML: string, nif: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:veri="https://www.agenciatributaria.es/static/G1Invoicing/facturae/v1.0">
  <soap:Header>
    <veri:EnvolvedParty>
      <veri:TaxIdentification>
        <veri:NIF>${nif}</veri:NIF>
      </veri:TaxIdentification>
    </veri:EnvolvedParty>
  </soap:Header>
  <soap:Body>
    <veri:Invoices>
      ${invoiceXML}
    </veri:Invoices>
  </soap:Body>
</soap:Envelope>`;
}

export interface VeriFactuRequest {
  emitter: { nif: string; name: string };
  receiver: { nif: string; name: string };
  lines: { description: string; amount: number; vat: number }[];
  series?: string;
  date?: string;
}

export function buildVeriFactuRequest(data: VeriFactuRequest, invoiceNumber: number): AEATInvoice {
  const base = data.lines.reduce((sum, line) => sum + line.amount, 0);
  const vat = data.lines.reduce((sum, line) => sum + (line.amount * line.vat / 100), 0);
  const total = base + vat;
  const date = data.date || new Date().toISOString().split('T')[0];

  return {
    Cabecera: {
      IDVersion: '1.0',
      Algoritmo: 'SHA256withRSA',
    },
    Factura: {
      Emitida: {
        NIF: data.emitter.nif,
        NombreRazon: data.emitter.name,
        SerieFactura: data.series || 'F',
        NumFactura: invoiceNumber.toString().padStart(4, '0'),
        FechaExp: date,
      },
      Receptor: {
        NIF: data.receiver.nif,
        NombreRazon: data.receiver.name,
      },
      Lineas: data.lines.map((line, index) => ({
        NumLinea: index + 1,
        Descripcion: line.description,
        Cantidad: 1,
        ImporteUnitario: line.amount,
        ImporteTotal: line.amount,
        DetalleIVA: {
          TipoImpositivo: line.vat,
          BaseImponible: line.amount,
          CuotaImpuesto: line.amount * (line.vat / 100),
        },
      })),
      Totales: {
        BaseImponible: base,
        CuotaTotal: vat,
        ImporteTotal: total,
      },
    },
  };
}