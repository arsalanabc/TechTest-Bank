describe('Bank', function(){
	beforeEach(function(){
		//var transaction = jasmine.createSpyObj('Transaction', ['getDate','getType','getAmount','getBalance']);
		// let transaction = {
		// 		getType: function(){},
		// 		getDate: function(){},
		// 		getAmount: function(){},
		// 		getBalance: function(){}
		// };

		bank = new Bank(Transaction);
	});

	describe('#account', function(){
		
		it('default balance is zero', function(){
			expect(bank.seeBalance()).toEqual(0);
		});

		it('deposit funds', function(){
			bank.deposit(202)
			expect(bank.seeBalance()).toEqual(202);

			bank.deposit(123)
			expect(bank.seeBalance()).toEqual(202+123);

			bank.deposit(1)
			expect(bank.seeBalance()).toEqual(202+123+1);
		});

		it('withdraw funds', function(){
			bank.deposit(100)
			bank.withdraw(12)
			expect(bank.seeBalance()).toEqual(100-12);

			bank.withdraw(3)
			expect(bank.seeBalance()).toEqual(100-12-3);

			bank.withdraw(1)
			expect(bank.seeBalance()).toEqual(100-12-3-1);
		});


	});


	describe("transactions", function(){
		
		describe('#transaction', function(){

			it('transaction dependency', function(){
				expect(bank._transaction).toEqual(Transaction);
			});


			it('stores transactions', function(){
				
				expect(bank.transactions()).toEqual([]);
			});

			it('one transaction', function(){
				bank.deposit(2);

				transaction = new Transaction("Debit", 2, bank.seeBalance())

				expect(bank.transactions()).toEqual([transaction]);
			});

			it('multiple transactions', function(){

				bank.deposit(20);
				transaction_1 = new Transaction("Debit", 20, bank.seeBalance())

				bank.withdraw(12);
				transaction_2 = new Transaction("Credit", 12, bank.seeBalance())

				bank.deposit(3);
				transaction_3 = new Transaction("Debit", 3, bank.seeBalance())

				expect(bank.transactions()).toEqual([transaction_1,transaction_2,transaction_3]);
			});
		});
	});

});