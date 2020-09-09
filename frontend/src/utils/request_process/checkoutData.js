export const checkoutData = {
  defaultData: () => {
    return {
      paymentMode: "default",
      paymentMethod: "boleto",
      receiverEmail: "emerson.bl@gmail.com",
      currency: "BRL",
      extraAmount: "1.00",
      notificationURL: "https://sualoja.com.br/notifica.html",
    };
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
  shippingData: function(
    shippingAddressStreet,
    shippingAddressNumber,
    shippingAddressComplement,
    shippingAddressDistrict,
    shippingAddressPostalCode,
    shippingAddressCity,
    shippingAddressState,
    shippingAddressCountry,
    shippingType = "1",
    shippingCost = "1,00"
  ) {
    return {
      shippingAddressStreet,
      shippingAddressNumber,
      shippingAddressComplement,
      shippingAddressDistrict,
      shippingAddressPostalCode,
      shippingAddressCity,
      shippingAddressState,
      shippingAddressCountry,
      shippingType,
      shippingCost,
    };
  },

  itemData(itemId1, itemQuantity1, itemDescription1, itemAmount1) {
    return {
      itemId1,
      itemDescription1,
      itemAmount1,
      itemQuantity1,
    };
  },
};
