// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var Slide$ReactTemplate = require("./Slide.bs.js");

function updateHistory(slide, content) {
  var newUrl = "#/" + (String(slide) + ("/" + String(content)));
  window.history.pushState(window.history.state, "", newUrl);
  return /* () */0;
}

var component = ReasonReact.reducerComponent("Slides");

var style = {
  backgroundColor: "#002b36",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  width: "100%"
};

var controlsStyle = {
  bottom: "20px",
  position: "fixed",
  right: "10px"
};

var leftControlStyle = {
  backgroundColor: "transparent",
  border: "12px solid transparent",
  borderRightColor: "#93a1a1",
  borderRightWidth: "22px",
  cursor: "pointer",
  margin: "0 5px 0 5px",
  padding: "0"
};

var rightControlStyle = {
  backgroundColor: "transparent",
  border: "12px solid transparent",
  borderLeftColor: "#93a1a1",
  borderLeftWidth: "22px",
  cursor: "pointer",
  margin: "0 5px 0 5px",
  padding: "0"
};

function make(content, isLoading, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              self[/* state */1][/* keyDownHandler */2][0] = (function (e) {
                  var match = e.key;
                  switch (match) {
                    case "ArrowRight" : 
                    case "PageDown" : 
                        return Curry._1(self[/* send */3], /* NextSlide */1);
                    case "ArrowLeft" : 
                    case "PageUp" : 
                        return Curry._1(self[/* send */3], /* PreviousSlide */0);
                    default:
                      return /* () */0;
                  }
                });
              document.addEventListener("keydown", self[/* state */1][/* keyDownHandler */2][0]);
              var pathSegments = window.location.hash.split("/");
              if (pathSegments.length !== 3) {
                return /* () */0;
              } else {
                var match = pathSegments[0];
                if (match === "#") {
                  var a = pathSegments[1];
                  var b = pathSegments[2];
                  return Curry._1(self[/* send */3], /* GoToSlide */[
                              Caml_format.caml_int_of_string(a),
                              Caml_format.caml_int_of_string(b)
                            ]);
                } else {
                  return /* () */0;
                }
              }
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */(function (self) {
              document.removeEventListener("keydown", self[/* state */1][/* keyDownHandler */2][0]);
              return /* () */0;
            }),
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              if (isLoading) {
                return React.createElement("h1", undefined, "Loading slides...");
              } else {
                var slideContents = List.nth(content, self[/* state */1][/* currentSlide */0]);
                return React.createElement("div", {
                            style: style
                          }, ReasonReact.element(undefined, undefined, Slide$ReactTemplate.make(slideContents, self[/* state */1][/* currentSlideContent */1], /* array */[])), React.createElement("aside", {
                                style: controlsStyle
                              }, React.createElement("button", {
                                    style: leftControlStyle,
                                    onClick: (function (_event) {
                                        return Curry._1(self[/* send */3], /* PreviousSlide */0);
                                      })
                                  }), React.createElement("button", {
                                    style: rightControlStyle,
                                    onClick: (function (_event) {
                                        return Curry._1(self[/* send */3], /* NextSlide */1);
                                      })
                                  })));
              }
            }),
          /* initialState */(function (param) {
              return /* record */[
                      /* currentSlide */0,
                      /* currentSlideContent */0,
                      /* keyDownHandler : record */[/* contents */(function (_e) {
                            return /* () */0;
                          })]
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (typeof action === "number") {
                if (action !== 0) {
                  var lastContentOnThisSlide = List.length(List.nth(content, state[/* currentSlide */0])) - 1 | 0;
                  var lastSlide = List.length(content) - 1 | 0;
                  var match = state[/* currentSlideContent */1] >= lastContentOnThisSlide;
                  var match$1 = state[/* currentSlide */0] === lastSlide && state[/* currentSlideContent */1] === lastContentOnThisSlide;
                  var tmp;
                  if (match$1) {
                    tmp = state[/* currentSlideContent */1];
                  } else {
                    var match$2 = state[/* currentSlideContent */1] >= lastContentOnThisSlide;
                    tmp = Caml_primitive.caml_int_min(match$2 ? 0 : state[/* currentSlideContent */1] + 1 | 0, lastContentOnThisSlide);
                  }
                  return /* UpdateWithSideEffects */Block.__(2, [
                            /* record */[
                              /* currentSlide */Caml_primitive.caml_int_min(match ? state[/* currentSlide */0] + 1 | 0 : state[/* currentSlide */0], lastSlide),
                              /* currentSlideContent */tmp,
                              /* keyDownHandler */state[/* keyDownHandler */2]
                            ],
                            (function (param) {
                                var state = param[/* state */1];
                                return updateHistory(state[/* currentSlide */0], state[/* currentSlideContent */1]);
                              })
                          ]);
                } else {
                  var match$3 = state[/* currentSlide */0] > 0;
                  var lastContentOnPreviousSlide = match$3 ? List.length(List.nth(content, state[/* currentSlide */0] - 1 | 0)) - 1 | 0 : -1;
                  var match$4 = state[/* currentSlideContent */1] <= 0;
                  var match$5 = state[/* currentSlideContent */1] <= 0 && state[/* currentSlide */0] <= 0;
                  var tmp$1;
                  if (match$5) {
                    tmp$1 = 0;
                  } else {
                    var match$6 = state[/* currentSlideContent */1] <= 0;
                    tmp$1 = Caml_primitive.caml_int_max(match$6 ? lastContentOnPreviousSlide : state[/* currentSlideContent */1] - 1 | 0, 0);
                  }
                  return /* UpdateWithSideEffects */Block.__(2, [
                            /* record */[
                              /* currentSlide */Caml_primitive.caml_int_max(match$4 ? state[/* currentSlide */0] - 1 | 0 : state[/* currentSlide */0], 0),
                              /* currentSlideContent */tmp$1,
                              /* keyDownHandler */state[/* keyDownHandler */2]
                            ],
                            (function (param) {
                                var state = param[/* state */1];
                                return updateHistory(state[/* currentSlide */0], state[/* currentSlideContent */1]);
                              })
                          ]);
                }
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* currentSlide */action[0],
                            /* currentSlideContent */action[1],
                            /* keyDownHandler */state[/* keyDownHandler */2]
                          ]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.updateHistory = updateHistory;
exports.component = component;
exports.style = style;
exports.controlsStyle = controlsStyle;
exports.leftControlStyle = leftControlStyle;
exports.rightControlStyle = rightControlStyle;
exports.make = make;
/* component Not a pure module */
