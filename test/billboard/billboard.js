var viewer = new Cesium.Viewer('cesiumContainer');

function addBillboard() {
    Sandcastle.declare(addBillboard);

    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        billboard :{
            image : '../images/Cesium_Logo_overlay.png'
        }
    });
}

function setBillboardProperties() {
    Sandcastle.declare(setBillboardProperties);

    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        billboard : {
            image : '../images/Cesium_Logo_overlay.png', // default: undefined
            show : true, // default
            pixelOffset : new Cesium.Cartesian2(0, -50), // default: (0, 0)
            eyeOffset : new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
            horizontalOrigin : Cesium.HorizontalOrigin.CENTER, // default
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM, // default: CENTER
            scale : 2.0, // default: 1.0
            color : Cesium.Color.LIME, // default: WHITE
            rotation : Cesium.Math.PI_OVER_FOUR, // default: 0.0
            alignedAxis : Cesium.Cartesian3.ZERO, // default
            width : 100, // default: undefined
            height : 25 // default: undefined
        }
    });
}

function changeBillboardProperties() {
    Sandcastle.declare(changeBillboardProperties);

    var entity = viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883, 300000.0),
        billboard : {
            image : '../images/Cesium_Logo_overlay.png'
        }
    });

    var billboard = entity.billboard;
    billboard.scale = 3.0;
    billboard.color = Cesium.Color.WHITE.withAlpha(0.25);
}

function sizeBillboardInMeters() {
    Sandcastle.declare(sizeBillboardInMeters);

    var entity = viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        billboard : {
            image : '../images/Cesium_Logo_overlay.png',
            sizeInMeters : true
        }
    });

    viewer.zoomTo(entity);
}

function addMultipleBillboards() {
    Sandcastle.declare(addMultipleBillboards);

    var logoUrl = '../images/Cesium_Logo_overlay.png';
    var facilityUrl = '../images/facility.gif';

    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        billboard : {
            image : logoUrl
        }
    });
    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-80.50, 35.14),
        billboard : {
            image : facilityUrl
        }
    });
    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-80.12, 25.46),
        billboard : {
            image : facilityUrl
        }
    });
}

function scaleByDistance() {
    Sandcastle.declare(scaleByDistance);

    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        billboard : {
            image : '../images/facility.gif',
            scaleByDistance : new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5)
        }
    });
}

function fadeByDistance() {
    Sandcastle.declare(fadeByDistance);

    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        billboard : {
            image : '../images/Cesium_Logo_overlay.png',
            translucencyByDistance : new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5)
        }
    });
}

function offsetByDistance() {
    Sandcastle.declare(offsetByDistance);
    Cesium.when.all([
         Cesium.Resource.fetchImage('../images/Cesium_Logo_overlay.png'),
         Cesium.Resource.fetchImage('../images/facility.gif')
        ],
        function(images) {
            // As viewer zooms closer to facility billboard,
            // increase pixelOffset on CesiumLogo billboard to this height
            var facilityHeight = images[1].height;

            // colocated billboards, separate as viewer gets closer
            viewer.entities.add({
                position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
                billboard : {
                    image : images[1],
                    horizontalOrigin : Cesium.HorizontalOrigin.CENTER,
                    verticalOrigin : Cesium.VerticalOrigin.BOTTOM
                }
            });
            viewer.entities.add({
                position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
                billboard : {
                    image : images[0],
                    horizontalOrigin : Cesium.HorizontalOrigin.CENTER,
                    verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
                    pixelOffset : new Cesium.Cartesian2(0.0, -facilityHeight),
                    pixelOffsetScaleByDistance : new Cesium.NearFarScalar(1.0e3, 1.0, 1.5e6, 0.0),
                    translucencyByDistance : new Cesium.NearFarScalar(1.0e3, 1.0, 1.5e6, 0.1)
                }
            });
    });
}

function addMarkerBillboards() {
    Sandcastle.declare(addMarkerBillboards);

    // Add several billboards based on the above image in the atlas.
    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
        billboard : {
            image : '../images/whiteShapes.png',
            imageSubRegion : new Cesium.BoundingRectangle(49, 43, 18, 18),
            color : Cesium.Color.LIME
        }
    });
    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-84.0, 39.0),
        billboard : {
            image : '../images/whiteShapes.png',
            imageSubRegion : new Cesium.BoundingRectangle(61, 23, 18, 18),
            color : new Cesium.Color(0, 0.5, 1.0, 1.0)
        }
    });
    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-70.0, 41.0),
        billboard : {
            image : '../images/whiteShapes.png',
            imageSubRegion : new Cesium.BoundingRectangle(67, 80, 14, 14),
            color : new Cesium.Color(0.5, 0.9, 1.0, 1.0)
        }
    });
    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-73.0, 37.0),
        billboard : {
            image : '../images/whiteShapes.png',
            imageSubRegion : new Cesium.BoundingRectangle(27, 103, 22, 22),
            color : Cesium.Color.RED
        }
    });
    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-79.0, 35.0),
        billboard : {
            image : '../images/whiteShapes.png',
            imageSubRegion : new Cesium.BoundingRectangle(105, 105, 18, 18),
            color : Cesium.Color.YELLOW
        }
    });
}

var terrainProvider;
function disableDepthTest() {
    Sandcastle.declare(disableDepthTest);

    terrainProvider = viewer.terrainProvider;
    viewer.terrainProvider = Cesium.createWorldTerrain();
    viewer.scene.globe.depthTestAgainstTerrain = true;

    viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-122.1958, 46.1915),
        billboard : {
            image : '../images/facility.gif',
            heightReference : Cesium.HeightReference.CLAMP_TO_GROUND,
            disableDepthTestDistance : Number.POSITIVE_INFINITY
        }
    });
    viewer.zoomTo(viewer.entities);
}

Sandcastle.addToolbarMenu([{
    text : 'Add billboard',
    onselect : function() {
        addBillboard();
        Sandcastle.highlight(addBillboard);
    }
}, {
    text : 'Set billboard properties at creation',
    onselect : function() {
        setBillboardProperties();
        Sandcastle.highlight(setBillboardProperties);
    }
}, {
    text : 'Change billboard properties',
    onselect : function() {
        changeBillboardProperties();
        Sandcastle.highlight(changeBillboardProperties);
    }
}, {
    text : 'Size billboard in meters',
    onselect : function() {
        sizeBillboardInMeters();
        Sandcastle.highlight(sizeBillboardInMeters);
    }
}, {
    text : 'Add multiple billboards',
    onselect : function() {
        addMultipleBillboards();
        Sandcastle.highlight(addMultipleBillboards);
    }
}, {
    text : 'Scale by viewer distance',
    onselect : function() {
        scaleByDistance();
        Sandcastle.highlight(scaleByDistance);
    }
}, {
    text : 'Fade by viewer distance',
    onselect : function() {
        fadeByDistance();
        Sandcastle.highlight(fadeByDistance);
    }
}, {
    text : 'Offset by viewer distance',
    onselect : function() {
        offsetByDistance();
        Sandcastle.highlight(offsetByDistance);
    }
}, {
    text : 'Add marker billboards',
    onselect : function() {
        addMarkerBillboards();
        Sandcastle.highlight(addMarkerBillboards);
    }
}, {
    text : 'Disable the depth test when clamped to ground',
    onselect : function() {
        disableDepthTest();
        Sandcastle.highlight(disableDepthTest);
    }
}]);

Sandcastle.reset = function () {
    viewer.camera.flyHome(0);
    viewer.entities.removeAll();

    if (Cesium.defined(terrainProvider)) {
        viewer.terrainProvider = terrainProvider;
        terrainProvider = undefined;
        viewer.scene.globe.depthTestAgainstTerrain = false;
    }
};
