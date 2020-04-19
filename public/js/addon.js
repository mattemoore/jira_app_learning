/* App frontend script */
getLocation();

function getLocation() {
    AP.getLocation(function(location){
        alert(location);
    });
}
