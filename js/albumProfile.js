
$(function() {
  // Document is ready
  render(models.entries, $('.template'), $('.albumProfile'));
  render(models.alexAlbum, $('.alexTemplate'), $('.alexContainer'));
  render(models.ambikaAlbum, $('.ambikaTemplate'), $('.ambikaContainer'));
  render(models.briaunaAlbum, $('.briaunaTemplate'), $('.briaunaContainer'));
  render(models.devynAlbum, $('.devynTemplate'), $('.devynContainer'));
});

function render(entries, template, container) {
    var instance;
    container.hide();
    container.empty();

    $.each(entries, function(){
        instance = template.clone();
        for (property in this) {
            instance.find('.' + property);
            if (property =='pic') {
                instance.find('.pic').attr({
                    src: this.pic,
                    alt: 'Picture of ' + this.name
                });
                 
            } else {
                instance.find('.' + property).html(this[property]);
            }
        }
        instance.removeClass('template');
        container.append(instance);
        container.fadeIn(1000);
    });
}