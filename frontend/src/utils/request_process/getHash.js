/* onSenderHashReady:
 *https://dev.pagseguro.uol.com.br/reference/checkout-transparente#onsenderhashready
 */
export default async function getHash() {
  PagSeguroDirectPayment.onSenderHashReady(function(response) {
    if (response.status == "error") {
      console.log(response.message);
      return false;
    }
    var hash = response.senderHash; //Hash estará disponível nesta variável.
    window.hash1 = hash;
  });
}
