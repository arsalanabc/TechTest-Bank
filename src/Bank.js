var Bank = function(Transaction){
	this._balance = 0;
	this._list_of_transactions = [];
	this._transaction = Transaction
}

Bank.prototype.seeBalance = function() {
	return this._balance;
};


Bank.prototype.deposit = function(amount){
	this._balance += amount;
	this._list_of_transactions.push(this.makeTransaction("Debit", amount))
};

Bank.prototype.withdraw = function(amount) {
	this._balance -= amount;
	this._list_of_transactions.push(this.makeTransaction("Credit", amount))
};

Bank.prototype.transactions = function() {
	return this._list_of_transactions;
};


Bank.prototype.makeTransaction = function(type, amount) {
	let transaction =  new this._transaction(type, amount, this._balance);
	return transaction;
};

Bank.prototype.printStatement = function() {
	
	let transactionString = "date || credit || debit || balance \n"
	transactions = this._list_of_transactions;

	for(var i = 0; i<transactions.length; i++){
		transactionString+=transactions[i].getDate()+" ||"
		
		if(transactions[i].getType() == "Credit"){
			transactionString+=" "+transactions[i].getAmount()+" ||"	
		}

		else if(transactions[i].getType() == "Debit"){
			transactionString+=" || "+transactions[i].getAmount()	
		}

		transactionString+= " || "+transactions[i].getBalance()+"\n"

	}
	console.log(transactionString);
};