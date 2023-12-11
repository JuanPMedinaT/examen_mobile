from django.shortcuts import render

from django_user_agents.utils import get_user_agent

def descargar_apk(request):
    user_agent = get_user_agent(request)
    is_mobile = user_agent.is_mobile
    context = {'is_mobile': is_mobile}
    return render(request, 'descargar_apk.html', context)
   
