module.exports = function (app) {
    var User = app.models.User;
    User.create({ email: 'leitediogo@gmail.com', password: 'brucebanner' }, function (err, userInstance) {
        console.log(userInstance);
    })
};