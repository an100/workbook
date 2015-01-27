
from PIL import Image, ImageFilter


def do_compute():

    orig_name = "static/lab_ImageSingle/packers.jpg"
    new_name = "static/lab_ImageSingle/packersNEW.jpg"
    # bring data into memory
    orig = Image.open(orig_name)
    pixels = orig.load()

    # make changes to data, creating new image
    for i in range(200):
        pixels[i, i] = (255,0,0)

    # write data to file
    orig.save(new_name)

    # build dictionary containing orig and new
    RESULTS = {'orig': orig_name, 'new': new_name }                                              
    # return dictionary
    return RESULTS

#get_image_data()