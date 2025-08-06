function simHover(elem) {
    var parent = elem.parentElement;
    for(var c = 0; c < parent.children.length; ++c) {
        var child = parent.children[c];
        if ( child == elem ) {
            child.classList.toggle("sim-hover");
        } else if ( child.classList.contains("sim-hover") ) {
            child.classList.remove("sim-hover");
        }
    }
}