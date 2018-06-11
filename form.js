let message = '';
let customer;
let search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
/*function form(){
  <center>
  <form>
      <br><strong><center><h1>Contact Us</h1></center></strong>
     <center><p>Customer request form</p></center> 
      <p></p>
      <center> 
          <p>Comapany Name:</p>
          <input  placeholder="Your name.." required>

          <p>Contact Number:</p>
          <input   placeholder="Telephone number.." type="tel" required>

          <p>Comapany address:</p>
          <input   placeholder="Your last name.."  required>

          <p>Email Address:</p>
         <input   placeholder="example@myemail.com" required>
         <p>Item(s):</p>
          <textarea placeholder="Request items" required></textarea> 
           <p>Amount due:</p>
         <input   type="number" placeholder="amount $" required>
           <p>Date of Payment:</p>
         <input   type="date" placeholder="Your a" required>   <br>


        
           <button>Submit</button>

        </form></center>
    </div>
  </center>
}
*/
function getCustomerRequest( customer ) {
  var report = '<h2>Company name: ' + customer.name + '</h2>';
  report += '<p>Customer Number: ' + customer.${} + '</p>';
  report += '<p>Comapany address: ' + customer.address + '</p>';
  report += '<p>Email address: ' + customer.email + '</p>';
  report += '<p>Items: ' + customer.items + '</p>';
  //report += '<p>Email address: ' + customer.achievements + '</p>';
  return report;
}

/*while (true) {
  search = prompt('Search item records: type a name [Jody] (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }*/
  for (let i = 0; i < students.length; i += 1) {
    customer = students[i];
    if ( customer.name === search ) {
      message = getCustomerRequest( customer );
      print(message);
    }
