const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.route('/items/:inputId')
  .get(controller.get);
// .post(controller.post)
// .delete(controller.delete)
// .patch(controller.update)

// get 4 random items, 4 colors
//    random product ID then get picture 1st color
//    set state with that ID and color ID
// on item hover, get zoomed picture of current item w/ color
//    need item ID and color ID for zoomed pic
// and assoiciated color swatches with that ID
//    need product ID and return all color swatches
// on swatch hover, get color zoom picture
//    need product ID and color ID to return zoom picture
//    also main picture to set as state.

module.exports = router;
