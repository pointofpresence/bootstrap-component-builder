/* global define */

define("lib/Components", [], function () {
    "use strict";

    return {
        "Link":               {
            "url":   "http:\/\/getbootstrap.com\/examples\/theme\/", "name": "Link",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "Button":          {
            "url":   "http:\/\/getbootstrap.com\/examples\/theme\/", "name": "Button",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "DropdownButton":  {
            "url":   "http:\/\/getbootstrap.com\/components\/#dropdowns", "name": "Dropdown Button",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "Label":           {
            "url":   "http:\/\/getbootstrap.com\/components\/#labels", "name": "Label",
            "color": ["label-default", "label-primary", "label-info", "label-success", "label-warning", "label-danger"],
            "size":  ["6", "5", "3", "1"]
        }, "LinkBadge":       {
            "url":   "http:\/\/getbootstrap.com\/components\/#badges", "name": "Link Badge",
            "color": ["", "", "", "", "", ""], "size": ["", "", "", "", "", ""]
        }, "ButtonBadge":     {
            "url":   "http:\/\/getbootstrap.com\/components\/#badges", "name": "Button Badge",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "Alert":           {
            "url":   "http:\/\/getbootstrap.com\/components\/#alerts", "name": "Alert",
            "color": ["", "", "alert-info", "alert-success", "alert-warning", "alert-danger"],
            "size":  ["", "", "", "", "", ""]
        }, "Progressbar":     {
            "url":   "http:\/\/getbootstrap.com\/components\/#progress", "name": "Progress bar",
            "color": ["", "", "progress-bar-info", "progress-bar-success", "progress-bar-warning", "progress-bar-danger"],
            "size":  ["", "", "", "", "", ""]
        }, "ListGroup":       {
            "url":   "http:\/\/getbootstrap.com\/components\/#list-group", "name": "List Group",
            "color": ["", "", "list-group-item-info", "list-group-item-success", "list-group-item-warning", "list-group-item-danger"],
            "size":  ["", "", "", "", "", ""]
        }, "InputGroup":      {
            "url":   "http:\/\/getbootstrap.com\/components\/#input-groups", "name": "Input Group",
            "color": ["", "", "", "", "", ""], "size": ["input-group-sm", "input-group-sm", "", "input-group-lg"]
        }, "Jumbotron":       {
            "url":   "http:\/\/getbootstrap.com\/components\/#jumbotron", "name": "Jumbotron",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "Panel":           {
            "url":   "http:\/\/getbootstrap.com\/components\/#panels", "name": "Panel",
            "color": ["panel-default", "panel-primary", "panel-info", "panel-success", "panel-warning", "panel-danger"],
            "size":  ["", "", "", "", "", ""]
        }, "Tabs":            {
            "url":   "http:\/\/getbootstrap.com\/components\/#nav-tabs", "name": "Tabs",
            "color": ["", "", "", "", "", ""],
            "size":  ["", "", "", "", "", ""]
        }, "Pills":           {
            "url":   "http:\/\/getbootstrap.com\/components\/#nav-pills", "name": "Pills",
            "color": ["", "", "", "", "", ""],
            "size":  ["", "", "", "", "", ""]
        }, "Breadcrumbs":     {
            "url":   "http:\/\/getbootstrap.com\/components\/#breadcrumbs", "name": "Breadcrumbs",
            "color": ["", "", "", "", "", ""], "size": ["", "", "", "", "", ""]
        }, "Well":            {
            "url":  "http:\/\/getbootstrap.com\/components\/#wells", "name": "Well", "color": ["", "", "", "", "", ""],
            "size": ["well-sm", "well-sm", "well-lg", "well-lg"]
        }, "Pagination":      {
            "url":   "http:\/\/getbootstrap.com\/components\/#pagination-default", "name": "Pagination",
            "color": ["", "", "", "", "", ""], "size": ["pagination-sm", "pagination-sm", "", "pagination-lg"]
        }, "Pager":           {
            "url":   "http:\/\/getbootstrap.com\/components\/#pagination-pager", "name": "Pager",
            "color": ["", "", "", "", "", ""], "size": ["", "", "", "", "", ""]
        }, "PageHeader":      {
            "url":   "http:\/\/getbootstrap.com\/components\/#page-header", "name": "Page Header",
            "color": ["", "", "", "", "", ""], "size": ["", "", "", "", "", ""]
        }, "Thumbnail":       {
            "url":   "http:\/\/getbootstrap.com\/components\/#thumbnails", "name": "Thumbnail",
            "color": ["", "", "", "", "", ""], "size": ["", "", "", "", "", ""]
        }, "ThumbnailCustom": {
            "url":   "http:\/\/getbootstrap.com\/components\/#thumbnails-custom-content", "name": "Thumbnail Custom",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "Media":           {
            "url":  "http:\/\/getbootstrap.com\/components\/#media", "name": "Media", "color": ["", "", "", "", "", ""],
            "size": ["", "", "", "", "", ""]
        }, "Navbar":          {
            "url":   "http:\/\/getbootstrap.com\/components\/#navbar", "name": "Navbar",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["", "", "", "", "", ""]
        }, "NavbarInverted":  {
            "url":   "http:\/\/getbootstrap.com\/components\/#navbar-inverted", "name": "Navbar Inverted",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["", "", "", "", "", ""]
        }, "Carousel":        {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#carousel", "name": "Carousel",
            "color": ["", "", "", "", "", ""], "size": ["", "", "", "", "", ""]
        }, "Modal":           {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#modals", "name": "Modal",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "Collapse":        {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#collapse", "name": "Collapse",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "DismissAlert1":   {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#alerts", "name": "Dismiss Alert #1",
            "color": ["", "", "alert-info", "alert-success", "alert-warning", "alert-danger"],
            "size":  ["", "", "", "", "", ""]
        }, "DismissAlert2":   {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#alerts", "name": "Dismiss Alert #2",
            "color": ["", "", "alert-info", "alert-success", "alert-warning", "alert-danger"],
            "size":  ["", "", "", "", "", ""]
        }, "LoadingButton":   {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#buttons-stateful", "name": "Loading Button",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "CheckboxButton":  {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#buttons-checkbox-radio", "name": "Checkbox Button",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "RadioButton":     {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#buttons-checkbox-radio", "name": "Radio Button",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "Accordion":       {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#collapse-example-accordion", "name": "Accordion",
            "color": ["panel-default", "panel-primary", "panel-info", "panel-success", "panel-warning", "panel-danger"],
            "size":  ["", "", "", "", "", ""]
        }, "Popover":         {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#popovers", "name": "Popover",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "Tooltip":         {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#tooltips", "name": "Tooltip",
            "color": ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-danger"],
            "size":  ["btn-xs", "btn-sm", "", "btn-lg"]
        }, "ScrollSpy":       {
            "url":   "http:\/\/getbootstrap.com\/javascript\/#scrollspy", "name": "ScrollSpy",
            "color": ["", "", "", "", "", ""], "size": ["", "", "", "", "", ""]
        }
    };
});