// KLASA KANBAN CARD
function Card(id, name) {
    var self = this;

    this.id = id;
    this.name = name || 'No name given';
    this.element = generateTemplate('card-template', {
        description: this.name
    }, 'li');

    this.element.querySelector('.card').addEventListener('click', function (event) {
        event.stopPropagation();

        if (event.target.classList.contains('btn-delete-card')) {
            self.removeCard();
        }
        // if (event.target.classList.contains('edit-card')) {
        //     self.editCard();
        // }
    });
}
Card.prototype = {
    removeCard: function () {
        var self = this;

        fetch(prefix + baseUrl + '/card/' + self.id, {
                method: 'DELETE',
                headers: myHeaders
            })
            .then(function (resp) {
                return resp.json();
            })
            .then(function (resp) {
                self.element.parentNode.removeChild(self.element);
            })
    },
    // editCard: function () {
    //     var newCardName = prompt("Enter a new name of the card");
    //     event.preventDefault();
    //     var self = this;
    //     fetch(prefix + baseUrl + '/card/' + self.id, {
    //             method: 'PUT',
    //             headers: myHeaders,
    //         })
    //         .then(function (resp) {
    //             return resp.json();
    //         })
    //         .then(function (resp) {
    //             this.name = newCardName;
    //         });
    // }
}