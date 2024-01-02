const emailTemplate = `
    <div>
        <h1>Hi, {{name}}</h1>
        <p>Thank you for your order.</p>
        <p>Order ID: {{orderId}}</p>
    </div>
`;

// console.log(emailTemplate);

// para exportar
module.exports = { emailTemplate };
