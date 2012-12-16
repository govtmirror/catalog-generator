// Generated by CoffeeScript 1.4.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Application.Views.FieldView = (function(_super) {

    __extends(FieldView, _super);

    function FieldView() {
      return FieldView.__super__.constructor.apply(this, arguments);
    }

    FieldView.prototype.el = '.fields';

    FieldView.prototype.tagName = 'div';

    FieldView.prototype["class"] = 'field';

    FieldView.prototype.template = $('#field_template').html();

    FieldView.prototype.input = function() {
      return $('#' + this.model.get('type') + '_template').html();
    };

    FieldView.prototype.render = function() {
      var field, rendered;
      rendered = _.template(this.template);
      field = _.template(this.input());
      return this.$el.append(rendered({
        model: this.model.toJSON(),
        field: field
      }));
    };

    return FieldView;

  })(Backbone.View);

}).call(this);
