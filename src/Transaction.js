var Transaction = function(amount, balance){
	this.date = setDate();
	this.amount = amount
	this.balance = balance
}

Transaction.prototype.getDate = function() {
	return this.date
};

Transaction.prototype.getAmount = function() {
	return this.amount;
};

Transaction.prototype.getBalance = function() {
	return this.balance;
};


function setDate(){
	let date = new Date();
	
	let formattedDate = date.getDate()+"/"
			formattedDate += date.getMonth()+"/"
			formattedDate += date.getFullYear();

	return formattedDate;
}