// ==============>  INTRO TO HTML5 WEB STORAGE  <====================

/*
        Web Storage ( session storage and local storage) is a new HTML 5,
    API offering important benefits over the traditional cookies. Before
    html5, application data had to be stored in traditional cookies, and 
    should be included in every server request. Web Storage is more secure,
    and large amount of data can be stored (atleast 5mb of data per cookie.).
    and never transfered to the server. 

        All sites from the same origin can store and access the same data from
    anywhere.

        The data being stored can be accessed using the javascript, which gives us
    the ability to leverage client side scripting.

    There are two kinds of web storages:
        1.  Session Storage.
        2.  Local Storage.



    1. LOCAL STORAGE : -
        Local storage is similar to session storage except that while data 
    stored in local storage has no expiration time, while data stored in session
    storage gets cleared when page session ends -- that is when the page is closed.

        It should be noted that, data stored in eaither type of web storage is
    specific to the protocol of the page itself.

        The keys and values are always strings (note that, as with objects, integer
    keys will be automatically converteed to the strings.)
*/


