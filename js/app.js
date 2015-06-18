var kitten = [
      {
        name      : "Minky",
        picture   : "http://fixnation.org/wordpress/wp-content/uploads/2014/03/cats-kittens_00379052.jpg",
        counter   : 0,
        nicknames : ["Stinky", "Flinky"],
        level     : "Newborn"
      },
      {
        name      : "Pinky",
        picture   : "http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16122057-1280-800.jpg",
        counter   : 0,
        nicknames : ["Krinky", "Blinky"],
        level     : "Newborn"
      },
      {
        name      : "Garfield",
        picture   : "http://www.bideawee.org/Media/Image/Brafton/It-s-kitten-season--Is-your-home-ready-for-the-arrival-of-your-new-pet-_16001188_800827146_0_0_14067751_500.jpg",
        counter   : 0,
        nicknames : ["Marfield", "Barfield"],
        level     : "Newborn"
      },
      {
        name      : "Carlos",
        picture   : "http://cdn.playbuzz.com/cdn/0672ae84-c6db-4ef4-86ee-16df735acc2e/53004251-b766-435d-ba4e-da0526d8e56d.jpg",
        counter   : 0,
        nicknames : ["Tarlos", "Warlos"],
        level     : "Newborn"
      },
      {
        name      : "Schmusi",
        picture   : "http://images4.fanpop.com/image/photos/16200000/Cute-Little-Kitten-cute-kittens-16288222-1024-768.jpg",
        counter   : 0,
        nicknames : ["Lusi", "Susi"],
        level     : "Newborn"
      }
    ];

var Cat = function(data) {
  this.counter = ko.observable(data.counter);
  this.name = ko.observable(data.name);
  this.picture = ko.observable(data.picture);
  this.nicknames = ko.observable(data.nicknames);

  this.level = ko.computed(function() {
      var title;
      var clicks = this.counter();

      if (clicks < 10) {
        title = 'Newborn';
      } else if (clicks < 30) {
        title = 'Infant';
      } else if (clicks < 50) {
        title = 'Teen';
      } else if (clicks < 100) {
        title = 'Adult';
      } else {
        title = 'Senior';
      }
      return title;
    }, this);
}

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  kitten.forEach(function(kitty){
    self.catList.push( new Cat(kitty) );
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
    // this.counter(this.counter() + 1);
    // self.currentCat().counter(self.currentCat().counter() + 1);
    var temp = self.currentCat().counter();
    self.currentCat().counter(temp+1);
  };

  this.showCurrentCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };

}


ko.applyBindings(new ViewModel());

