import axios from 'axios'
import Console from './lib/console/console'

class Boomber {

	Go() : void {

		axios.get("")
			.then(function(response) {

			})
			.catch(function(error) {

			})
			.then(function() {
				Console.Log("Я мамонт");
			});

	}

}

var boom : Boomber = new Boomber();
boom.Go();