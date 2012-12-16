// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Application.Views.IndexView = (function(_super) {

    __extends(IndexView, _super);

    function IndexView() {
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype.template = $('#index_template').html();

    IndexView.prototype.el = '.container';

    IndexView.prototype.events = {
      "click #add_dataset": "addDataset"
    };

    IndexView.prototype.render = function() {
      this.$el.html(this.template);
      return this.addDataset();
    };

    IndexView.prototype.addDataset = function() {
      var view;
      view = new Application.Views.DatasetView({
        model: new Application.Models.Dataset()
      });
      view.render();
      return false;
    };

    return IndexView;

  })(Backbone.View);

}).call(this);
