'use strict';

module.exports = function ({itemListingData}) {
    const numberOfElements = 10;

    function mostExpensiveItems(req, res) {
        itemListingData.getAllWithoutFilters()
            .then(listings => {

                let result = listings
                    .sort((a, b) => b.price - a.price)
                    .slice(0, numberOfElements);

                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            });
    }

    function mostSaledMakes(req, res) {
        itemListingData.getAllWithoutFilters()
            .then(listings => {

                let result = listings
                    // get sold only
                    .filter(x => !x.isActive)
                    // count by make
                    .reduce(function (allNames, item) {
                        let name = item.make;

                        if (name in allNames) {
                            allNames[name]++;
                        } else {
                            allNames[name] = 1;
                        }

                        return allNames;
                    }, {})
                    // sort
                    .sort((a, b) => b - a)
                    .slice(0, numberOfElements);

                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            });
    }

    function mostOfferedItems(req, res) {
        itemListingData.getAllWithoutFilters()
            .then(listings => {

                let result = listings
                    .sort((a, b) => b.offers.length - a.offers.length)
                    .slice(0, numberOfElements);

                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            });
    }

    function mostCommentedItems(req, res) {
        itemListingData.getAllWithoutFilters()
            .then(listings => {

                let result = listings
                    .sort((a, b) => b.comments.length - a.comments.length)
                    .slice(0, numberOfElements);

                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            });
    }

    function topBuyers(req, res) {
        itemListingData.getAllWithoutFilters()
            .then(listings => {

                let result = listings
                    // get sold only
                    .filter(x => !x.isActive)
                    // get offers
                    .map(x => x.offers
                        // get only accepted offers
                        .filter(y => y.status === 'accepted'))
                    // flat
                    .reduce((all, curent) => {
                        return all.concat(curent);
                    }, [])
                    // count accepted offers by buyer username
                    .reduce(function (allNames, offer) {
                        let name = offer.username;
                        let found = false;

                        for (let i of allNames) {
                            if (i.username === name) {
                                found = i;
                                break;
                            }
                        }

                        if (found) {
                            found.count++;
                        } else {
                            allNames.push({
                                username: name,
                                count: 1
                            });
                        }

                        return allNames;
                    }, [])
                    // // sort
                    .sort((a, b) => b.count - a.count)
                    .slice(0, numberOfElements);

                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            });
    }

    function topSellers(req, res) {
        itemListingData.getAllWithoutFilters()
            .then(listings => {
                let result = listings
                    // get sold only               
                    .filter(x => !x.isActive)
                    // count by owner username
                    .reduce(function (allNames, item) {
                        let name = item.owner;
                        let found = false;

                        for (let i of allNames) {
                            if (i.username === name) {
                                found = i;
                                break;
                            }
                        }

                        if (found) {
                            found.count++;
                        } else {
                            allNames.push({
                                username: name,
                                count: 1
                            });
                        }

                        return allNames;
                    }, [])
                    .sort((a, b) => b.count - a.count)
                    .slice(0, numberOfElements);

                res.status(200).json(result);

            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            });
    }

    function topActiveUsers(req, res) {
        itemListingData.getAllWithoutFilters()
            .then(listings => {

                let result = listings
                    .map(x => x.offers)
                    .reduce((all, curent) => {
                        return all.concat(curent);
                    }, [])
                    .reduce(function (allNames, offer) {
                        let name = offer.username;

                        let found = false;

                        for (let i of allNames) {
                            if (i.username === name) {
                                found = i;
                                break;
                            }
                        }

                        if (found) {
                            found.count++;
                        } else {
                            allNames.push({
                                username: name,
                                count: 1
                            });
                        }

                        return allNames;
                    }, [])
                    .sort((a, b) => b - a)
                    .slice(0, numberOfElements);

                res.status(200).json(result);

            })
            .catch((err) => {
                res.status(400).json({ message: err.message });
            });
    }

    return {
        mostExpensiveItems,
        mostSaledMakes,
        mostOfferedItems,
        mostCommentedItems,
        topBuyers,
        topSellers,
        topActiveUsers
    };

};