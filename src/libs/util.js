let util = {

};
util.title = function (title) {
 title = title ? title + ' - Home' : 'Appraisal';
 window.document.title = title;
};

export default util;
