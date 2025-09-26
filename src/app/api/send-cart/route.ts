import { Resend } from 'resend';
import { type NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface CartItem {
  productId: number;
  variantId: number;
  name: string;
  variantName: string;
  icon: string;
  quantity: number;
  unit: 'WEIGHT' | 'PIECES';
}

interface CustomerData {
  nome: string;
  cognome: string;
  indirizzo: string;
  numeroCivico: string;
  citofono: string;
  scalaInterno: string;
  altreInformazioni: string;
  telefono: string;
  email: string;
}

interface RequestBody {
  customerData: CustomerData;
  cartItems: CartItem[];
}

function generateEmailHTML(customerData: CustomerData, cartItems: CartItem[]): string {
  const subtotalWeight = cartItems
    .filter(item => item.unit === 'WEIGHT')
    .reduce((total, item) => total + item.quantity, 0);

  const subtotalPieces = cartItems
    .filter(item => item.unit === 'PIECES')
    .reduce((total, item) => total + item.quantity, 0);

  const currentDate = new Date().toLocaleDateString('it-IT', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <!DOCTYPE html>
    <html lang="it">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GoFrescoApp - Lista della Spesa</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #374151;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #16A34A 0%, #FB923C 100%);
          color: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .section {
          background: white;
          border: 2px solid #FB923C;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 25px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .section-title {
          color: #16A34A;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .customer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .customer-field {
          margin-bottom: 10px;
        }
        .customer-field strong {
          color: #374151;
          display: block;
          margin-bottom: 3px;
        }
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 15px;
          border-bottom: 1px solid #E5E7EB;
          background: #F9FAFB;
          margin-bottom: 8px;
          border-radius: 8px;
        }
        .item:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
        .item-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .item-emoji {
          font-size: 24px;
        }
        .item-text {
          flex: 1;
        }
        .item-name {
          font-weight: 600;
          color: #374151;
        }
        .item-variant {
          color: #6B7280;
          font-size: 14px;
        }
        .item-quantity {
          font-weight: bold;
          color: #2563EB;
          background: #EFF6FF;
          padding: 4px 8px;
          border-radius: 6px;
        }
        .summary {
          background: #F3F4F6;
          padding: 20px;
          border-radius: 10px;
          margin-top: 20px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          padding: 5px 0;
        }
        .summary-row.total {
          border-top: 2px solid #16A34A;
          padding-top: 12px;
          margin-top: 12px;
          font-weight: bold;
          font-size: 18px;
          color: #16A34A;
        }
        .footer {
          text-align: center;
          padding: 25px;
          background: #F9FAFB;
          border-radius: 10px;
          margin-top: 30px;
          color: #6B7280;
          font-size: 14px;
        }
        .disclaimer {
          background: #FEF3C7;
          border: 1px solid #F59E0B;
          border-radius: 8px;
          padding: 15px;
          margin: 20px 0;
          font-size: 14px;
          color: #92400E;
        }
        @media (max-width: 600px) {
          .customer-grid {
            grid-template-columns: 1fr;
          }
          .item {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">🟢🟠 GoFrescoApp</div>
        <div style="font-size: 16px;">Lista della Spesa</div>
      </div>

      <div class="section">
        <div class="section-title">
          👤 Dati Cliente
        </div>
        <div class="customer-grid">
          <div class="customer-field">
            <strong>Nome:</strong>
            ${customerData.nome} ${customerData.cognome}
          </div>
          <div class="customer-field">
            <strong>Telefono:</strong>
            ${customerData.telefono}
          </div>
          <div class="customer-field">
            <strong>Email:</strong>
            ${customerData.email}
          </div>
          <div class="customer-field">
            <strong>Data:</strong>
            ${currentDate}
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">
          📍 Indirizzo di Consegna
        </div>
        <div class="customer-field">
          <strong>Indirizzo:</strong>
          ${customerData.indirizzo} ${customerData.numeroCivico}
        </div>
        ${customerData.citofono ? `
        <div class="customer-field">
          <strong>Citofono:</strong>
          ${customerData.citofono}
        </div>
        ` : ''}
        ${customerData.scalaInterno ? `
        <div class="customer-field">
          <strong>Scala/Interno:</strong>
          ${customerData.scalaInterno}
        </div>
        ` : ''}
        ${customerData.altreInformazioni ? `
        <div class="customer-field">
          <strong>Note per la consegna:</strong>
          ${customerData.altreInformazioni}
        </div>
        ` : ''}
      </div>

      <div class="section">
        <div class="section-title">
          🛒 Articoli Richiesti (${cartItems.length})
        </div>
        ${cartItems.map(item => `
          <div class="item">
            <div class="item-info">
              <span class="item-emoji">${item.icon}</span>
              <div class="item-text">
                <div class="item-name">${item.name}</div>
                <div class="item-variant">${item.variantName}</div>
              </div>
            </div>
            <div class="item-quantity">
              ${item.quantity} ${item.unit === 'WEIGHT' ? 'Kg' : 'Pz'}
            </div>
          </div>
        `).join('')}
        
        <div class="summary">
          ${subtotalPieces > 0 ? `
          <div class="summary-row">
            <span>Totale Pezzi:</span>
            <strong>${subtotalPieces.toFixed(0)} Pz</strong>
          </div>
          ` : ''}
          ${subtotalWeight > 0 ? `
          <div class="summary-row">
            <span>Totale Peso:</span>
            <strong>${subtotalWeight.toFixed(2)} Kg</strong>
          </div>
          ` : ''}
          <div class="summary-row total">
            <span>Articoli Unici:</span>
            <span>${cartItems.length}</span>
          </div>
        </div>
      </div>

      <div class="disclaimer">
        <strong>⚠️ Informazioni Importanti</strong><br>
        Il seguente ordine verrà effettuato sotto forma di "Lista della Spesa". 
        Non sono presenti prezzi e non è garantita la presenza di tutti i prodotti selezionati. 
        Per ulteriori informazioni contattateci direttamente in negozio. 
        Grazie e buona spesa!
      </div>

      <div class="footer">
        <div style="font-weight: bold; color: #16A34A; margin-bottom: 10px;">
          🟢🟠 GoFrescoApp
        </div>
        <div>
          Lista della spesa generata il ${new Date().toLocaleDateString('it-IT')} alle ${new Date().toLocaleTimeString('it-IT')}
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as RequestBody;
    const { customerData, cartItems } = body;

    // Validate required fields
    if (!customerData.nome || !customerData.cognome || !customerData.email || !customerData.telefono) {
      return NextResponse.json(
        { error: 'Campi obbligatori mancanti' },
        { status: 400 }
      );
    }

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json(
        { error: 'Lista della spesa vuota' },
        { status: 400 }
      );
    }

    const emailHTML = generateEmailHTML(customerData, cartItems);
    const subject = `🛒 Nuova Lista della Spesa - ${customerData.nome} ${customerData.cognome}`;

    // TODO: Replace with your actual email address
    const YOUR_EMAIL = process.env.YOUR_EMAIL ?? 'your-email@example.com';

    // Send email to store owner
    const storeEmail = await resend.emails.send({
      from: 'GoFrescoApp <noreply@resend.dev>',
      to: [YOUR_EMAIL],
      subject: subject,
      html: emailHTML,
    });

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: 'GoFrescoApp <noreply@resend.dev>',
      to: [customerData.email],
      subject: `✅ Conferma Lista della Spesa - GoFrescoApp`,
      html: emailHTML,
    });

    return NextResponse.json({
      success: true,
      message: 'Email inviate con successo',
      storeEmailId: storeEmail.data?.id,
      customerEmailId: customerEmail.data?.id,
    });

  } catch (error) {
    console.error('Errore nell\'invio email:', error);
    return NextResponse.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    );
  }
}