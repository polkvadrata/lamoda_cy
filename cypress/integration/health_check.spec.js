/// <reference types="cypress" />
import { MainPage } from "../pages/main-page";
import { HeaderPage } from "../pages/header-page";

describe('health check for pages', ()=>{

    const mainPage = new MainPage;
    const headerPage = new HeaderPage;

    it ('main page',()=>{
        mainPage.navigate();
        headerPage.checkNavBar();
    })
})