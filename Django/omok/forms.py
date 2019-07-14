from django import forms

class HomeForm(forms.Form):
    team_name = forms.CharField(label='Team name', max_length=100)
