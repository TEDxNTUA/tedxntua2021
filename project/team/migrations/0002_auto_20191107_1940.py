# Generated by Django 2.2.6 on 2019-11-07 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teammembertranslation',
            name='first',
        ),
        migrations.RemoveField(
            model_name='teammembertranslation',
            name='last',
        ),
        migrations.AddField(
            model_name='teammembertranslation',
            name='name',
            field=models.CharField(default='', max_length=510),
        ),
    ]
