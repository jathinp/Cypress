/// <reference types ="cypress" />

import { gamespage } from "./Pages/gamespage"
const gameobj = new gamespage()


describe('Automation Test Suite ', function () {

	it("Games Home Page ", () => {
		cy.visit("https://hub88.io/games")
		gameobj.logo_visible()
	})

	it("Game Menu is present in the page", () => {
		gameobj.game_menu_link()
    })

	it("Click Let's Talk Button", () => {
		gameobj.letstalk()
	})
	it("Enter Details in Lets Talk", () => {
		gameobj.enter_fullname("Jathin P")
		gameobj.enter_email("Jathin.p@yolo.com")
		gameobj.enter_company_name("Yologroup")
		gameobj.enter_description("Welcome to Yolo Group :)")
	})
	it("Close the Let's Talk", () => {
		gameobj.closeletstalk()
    })
})