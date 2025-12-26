using System.ComponentModel.DataAnnotations;

namespace WiseBox.Api.Models.DTOs
{
    public class ContactFormRequest
    {
        [Required(ErrorMessage = "A név megadása kötelező")]
        [StringLength(100, ErrorMessage = "A név maximum 100 karakter lehet")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Az email megadása kötelező")]
        [EmailAddress(ErrorMessage = "Érvénytelen email formátum")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "A telefonszám megadása kötelező")]
        [RegularExpression(@"^[\d\s\+\-\(\)]+$", ErrorMessage = "Érvénytelen telefonszám formátum")]
        [StringLength(20, ErrorMessage = "A telefonszám maximum 20 karakter lehet")]
        public string Phone { get; set; } = string.Empty;

        [Required(ErrorMessage = "A cég nevének megadása kötelező")]
        [StringLength(200, ErrorMessage = "A cég neve maximum 200 karakter lehet")]
        public string Company { get; set; } = string.Empty;

        [Required(ErrorMessage = "Az üzenet megadása kötelező")]
        [StringLength(2000, ErrorMessage = "Az üzenet maximum 2000 karakter lehet")]
        public string Message { get; set; } = string.Empty;

        [Required(ErrorMessage = "Az adatkezelési tájékoztató elfogadása kötelező")]
        [Range(typeof(bool), "true", "true", ErrorMessage = "Az adatkezelési tájékoztató elfogadása kötelező")]
        public bool ConsentGiven { get; set; }
    }
}
