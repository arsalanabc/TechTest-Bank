var Bank = function(Transaction, printer){
	this._balance = 0;
	this._list_of_transactions = [];
	this._transaction = Transaction
	this.printer = printer;
}

Bank.prototype.seeBalance = function() {
	return this._balance;
};

Bank.prototype.deposit = function(amount){
	this._balance += amount;
	this._list_of_transactions.push(this.makeTransaction(amount, this._balance));
};

Bank.prototype.withdraw = function(amount) {
	this.deposit(-amount)
};

Bank.prototype.transactions = function() {
	return this._list_of_transactions;
};

Bank.prototype.makeTransaction = function(amount) {
	let transaction = new this._transaction(amount, this._balance);
	return transaction;
};

Bank.prototype.printStatement = function() {
	this.printer.logStatement(this._list_of_transactions);
};
