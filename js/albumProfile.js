
$(function() {
  // Document is ready
  render(models.entries, $('.template'), $('.albumProfile'));
  render(models.alexAlbum, $('.alexTemplate'), $('.alexContainer'));
  render(models.ambikaAlbum, $('.ambikaTemplate'), $('.ambikaContainer'));
  render(models.elleryAlbum, $('.elleryTemplate'), $('.elleryContainer'));
  render(models.giselleAlbum, $('.giselleTemplate'), $('.giselleContainer'));
  render(models.jenYiAlbum, $('.jenYiTemplate'), $('.jenYiContainer'));
  render(models.rachelAlbum, $('.rachelTemplate'), $('.rachelContainer'));
  render(models.shannonAlbum, $('.shannonTemplate'), $('.shannonContainer'));
  render(models.taylorAlbum, $('.taylorTemplate'), $('.taylorContainer'));
  render(models.vladAlbum, $('.vladTemplate'), $('.vladContainer'));
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