describe("Transaction", function(){

	it('has a balance', function(){
			var transaction = new Transaction("type", "amount", 42);
			
			bank = new Bank(Transaction)
			bank.deposit(42);

			expect(transaction.getBalance()).toEqual(42);
		});

	it('has a date', function(){
			var transaction = new Transaction("type", "amount", "balance");
			var todaysDate = new Date()
			var formattedDate = todaysDate.getDate()+"/"
			formattedDate += todaysDate.getMonth()+"/"
			formattedDate += todaysDate.getFullYear();

			expect(transaction.getDate()).toEqual(formattedDate);
		});

	it('has a type', function(){
			var transaction_1 = new Transaction("Credit", "amount", "balance");
			var transaction_2 = new Transaction("Debit", "amount", "balance");

			expect(transaction_2.getType()).toEqual("Debit");
			expect(transaction_1.getType()).toEqual("Credit");
		});

	it('has an amount', function(){
			var transaction_1 = new Transaction("Credit", 200);
			var transaction_2 = new Transaction("Debit", 100);

			expect(transaction_2.getAmount()).toEqual(100);
			expect(transaction_1.getAmount()).toEqual(200);
		});
});