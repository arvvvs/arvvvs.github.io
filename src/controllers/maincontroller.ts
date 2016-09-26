/// <reference path="../_all.ts" />

module personalWebsite {
	export class MainController{
		static $inject = [];
		constructor(){
		}
		front: boolean = true;
	}
	
 	$(function() {
		$(".element").typed({
			strings: ["Hello,"+"<br/>"+"^500I\'m Akshay"],
			typeSpeed: 45,
		});
	})
}
