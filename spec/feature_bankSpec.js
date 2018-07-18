describe("print balances", function(){
		it('shows full log of transactions', function(){

			bank = new Bank(Transaction)

			bank.deposit(100)
			bank.withdraw(12)
			bank.withdraw(29)

			
			let date = new Date();
			let formattedDate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
			
            spyOn(console, 'log');
            bank.printStatement()
            expect(console.log).toHaveBeenCalledWith(`date || credit || debit || balance \n`+
            	`${formattedDate} || || 100 || 100\n`+
            	`${formattedDate} || 12 || || 88\n`+
            	`${formattedDate} || 29 || || 59\n`);

			});

	});
