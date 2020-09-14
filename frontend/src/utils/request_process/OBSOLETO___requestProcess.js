import getSession from "@/utils/request_process/getSession.js";
import getHash from "@/utils/request_process/getHash.js";
import getBoleto from "@/utils/request_process/getBoleto.js";

export default async function requestProcess() {
  /* Request number */
  this.request_data.reference = await getRequestNumber();

  /* Session number */
  this.session = await getSession();
  console.log(this.session);

  /* Hash */
  await getHash();
  console.log("hash => ", window.hash1);

  /*   this.atribuicao(); */

  /* Request number */
  await getRequestNumber();

  /* Transaction data */
  this.transaction = await getBoleto(this.request_data);
  this.transaction = await window.parser.parse(this.transaction);
  console.log(this.transaction);
  console.log(this.transaction.transaction.paymentLink);

  /* Link boleto */
  this.linkBoleto = this.transaction.transaction.paymentLink;

  /* Saving the request  */
  await this.savingRequest();
}
