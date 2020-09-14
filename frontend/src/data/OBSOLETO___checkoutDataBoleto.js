export const checkoutDataBoleto = {
  defaultData: {
    paymentMode: "default",
    paymentMethod: "boleto",
    receiverEmail: "emerson.bl@gmail.com",
    currency: "BRL",
    extraAmount: "1.00",
    notificationURL: "https://sualoja.com.br/notifica.html",
  },
  senderData: (
    senderName,
    senderCPF,
    senderAreaCode,
    senderPhone,
    senderEmail
  ) => {
    return {
      senderName,
      senderCPF,
      senderAreaCode,
      senderPhone,
      senderEmail,
    };
  },
  shippingData: function() {
    return {
      shippingAddressStreet: "Av.Brig.FariaLima",
      shippingAddressNumber: "1384",
      shippingAddressComplement: "5oandar",
      shippingAddressDistrict: "JardimPaulistano",
      shippingAddressPostalCode: "01452002",
      shippingAddressCity: "SaoPaulo",
      shippingAddressState: "SP",
      shippingAddressCountry: "BRA",
      shippingType: "1",
      shippingCost: "1.00",
    };
  },
  itemData() {
    return {
      itemId1: "",
      itemDescription1: "Notebook Prata",
      itemAmount1: "24300.00",
      itemQuantity1: "1",
    };
  },
};
