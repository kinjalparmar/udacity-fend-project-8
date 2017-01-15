$(function() {

    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have a defined URL and that URL is not empty', function() {
            for (var url = 0; url < allFeeds.length; url++) {
                expect(allFeeds[url].url).toBeDefined();
                expect(allFeeds[url].url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have a defined name and that name is not empty', function() {
            for (var name = 0; name < allFeeds.length; name++) {
                expect(allFeeds[name].name).toBeDefined();
                expect(allFeeds[name].name.length).not.toBe(0);
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing o f the menu element.
         */
        it('should be hidden by default by having class menu-hidden', function() {
            var menuElementHidden = $('body').hasClass("menu-hidden");
            expect(menuElementHidden).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        describe('when clicked', function() {
            var menuIcon = $('.menu-icon-link');
            it('should display the menu', function() {

                //expect the menu to be displayed when clicked
                menuIcon.click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
            });
            it('should hide the menu', function() {

                //expect the menu to get hidden when clicked again
                menuIcon.click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    /* A test suite that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        //signals to the network that async has done doing what we need it to do and we can continue testing
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('has added entries', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var previousFeed;
        var newFeed;
        beforeEach(function(done) {

            // Load feeds
            loadFeed(0, function() {
                previousFeed = $('.feed').html();
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });

        // Make sure that the content of new feed is different
        it('should be new stuff', function(done) {
            expect(previousFeed).not.toBe(newFeed);
            done();
        });
    });
}());