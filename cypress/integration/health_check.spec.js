/// <reference types="cypress" />
import { MainPage } from "../pages/main-page";

describe('health check for pages', ()=>{

    const mainPage = new MainPage;

    it ('main page',()=>{
        mainPage.navigate()
    })
})