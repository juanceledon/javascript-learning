var interest = prompt("What is your interest rate?");
var amountInvested = prompt("How much money will you invest?");
var termInMonths = prompt("How many months will your invested last?");
var amountEarned = 0;

document.write("Making sure our numbers are good.<br/>");
document.write("interest is: " + interest);
document.write("<br/>amountInvested is: " + amountInvested);
document.write("<br/>termInMonths is: " + termInMonths);
document.write("<br/>amountEarned: " + amountEarned);
/*
document.write("<table>");
document.write("<tr><th>Month</th><th>Interest Earned</th><th>Total</th></tr>");

for ( var i = 1; i<=termInMonths; i++) {
  amountEarned = amountInvested * interest;
  amountInvested = amountInvested + amountEarned;
  document.write("<tr><td> " + i + " </td><td> " + amountEarned + " </td><td> " + amountInvested + " </td></tr>");
}

document.write("</table>");
*/
