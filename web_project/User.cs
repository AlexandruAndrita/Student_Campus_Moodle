using System;
using System.Diagnostics;

public class SignupViewModel
{
    public int UserId { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? UserPassword { get; set; }
    public string? UserConfirmPassword { get; set; }

    /*public void PrintMethod()
    {
        Debug.Print(UserId.ToString());
        Debug.Print(FirstName.ToString());
        Debug.Print(LastName.ToString());
        Debug.Print(Email.ToString());
        Debug.Print(UserPassword.ToString());
    }*/
}
