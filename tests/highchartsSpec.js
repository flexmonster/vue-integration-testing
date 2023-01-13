xdescribe('testing page With Highcharts', () => {
    before((client) => {
        this.currentPage = client.page.highchartsPage();
        this.pivotContainer = this.currentPage.section.pivotContainer;
        this.currentPage.navigate();
    });

    it("Check 'Integration with Highcharts' link to docs", (browser) => {
        this.pivotContainer.section.description.expect
            .element('@toHighchartsIntegrationLink').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@toHighchartsIntegrationLink').text.to.be.equal('Integration with Highcharts');
        this.pivotContainer.section.description.expect
            .element('@toHighchartsIntegrationLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/doc/integration-with-highcharts');
    });

    it('Check the Highcharts container', (browser) => {
        this.pivotContainer.section.chart.expect.element('@highcharts').to.be.visible;
         });

    after(client => client.end());
});
