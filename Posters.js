AFRAME.registerComponent("comics-posters", {
  init: function() {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function() {
    const postersRef = [
      {
        id: "sun",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fsol.jpg?v=1604296185621",
        
      },
      {
        id: "mercury",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fmercurio.jpg?v=1604298142259"
      },

      {
        id: "venus",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fvenus.jpg?v=1604312437571"
      },
      {
        id: "earth",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fearth.jpg?v=1604312404511"
      },
      {
        id: "mars",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fmercurio.jpg?v=1604298142259"
      },
      {
        id: "jupiter",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fjupiter.jpg?v=1604312404561"
      },

      {
        id: "saturn",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fsaturn.png?v=1604312433927"
      },
      {
        id: "uranus",
        url: "https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fmercurio.jpg?v=1604298142259"
      },
      {
        id:"neptune",
        url:"https://cdn.glitch.com/850dd813-e5e9-4dd0-9751-38981ae74172%2Fmercurio.jpg?v=1604298142259"
      }
    ];
    let prevoiusXPosition = -100;

    for (var item of postersRef) {
      const posX = prevoiusXPosition + 20;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Poster Element
      const poster = this.createPoster(item);
      borderEl.appendChild(poster);

      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius:0.1
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#fff" });
    entityEl.setAttribute("cursor-listener", {});
    return entityEl;
  },
  createPoster: function(item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius:5.5
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  }
});
