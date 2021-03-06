// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Markdown$ReactTemplate = require("./Markdown.bs.js");

var component = ReasonReact.statelessComponent("Slide");

var style = {
  display: "flex",
  height: "90%",
  left: "50%",
  margin: "auto",
  position: "absolute",
  textAlign: "center",
  top: "50%",
  width: "90%",
  flexDirection: "column",
  justifyContent: "center",
  transform: "translate(-50%, -50%)"
};

function contentStyle(isHidden) {
  return {
          display: "flex",
          visibility: isHidden ? "hidden" : "visible",
          alignItems: "center",
          justifyContent: "center"
        };
}

function make(content, currentContentIndex, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              var slides = List.mapi((function (i, s) {
                      return React.createElement("div", {
                                  style: contentStyle(i > currentContentIndex)
                                }, ReasonReact.element(undefined, undefined, Markdown$ReactTemplate.make(s, /* array */[])));
                    }), content);
              return React.createElement("div", {
                          className: "slide-container",
                          style: style
                        }, $$Array.of_list(slides));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.style = style;
exports.contentStyle = contentStyle;
exports.make = make;
/* component Not a pure module */
