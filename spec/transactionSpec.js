describe("Transaction", function(){

	it('has a balance', function(){
			var transaction = new Transaction(10, 42);
			
			expect(transaction.getBalance()).toEqual(42);
		});

	it('has a date', function(){
			var transaction = new Transaction(0, 0);
			var todaysDate = new Date();
			var formattedDate = todaysDate.getDate() + "/"
			formattedDate += todaysDate.getMonth() + "/"
			formattedDate += todaysDate.getFullYear();

			expect(transaction.getDate()).toEqual(formattedDate);
		});

	it('negative amount for credit', function(){
			var transaction_1 = new Transaction(-22, 200);
			var transaction_2 = new Transaction(-5, 100);

			expect(transaction_1.getAmount()).toEqual(-22);
			expect(transaction_2.getAmount()).toEqual(-5);
		});

	it('positive amount for debit', function(){
			var transaction_1 = new Transaction(100, 200);
			var transaction_2 = new Transaction(9, 100);

			expect(transaction_1.getAmount()).toEqual(100);
			expect(transaction_2.getAmount()).toEqual(9);
		});
});