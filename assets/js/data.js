/* * ARQUIVO DE DADOS 
 * Edite aqui as informações que aparecem no site.
 */

const projectData = {
    // Seção Hero (Topo)
    hero: {
        typingText: "Tecnologia e Inovação", // O texto que será digitado
        codeSnippet: `
# Código desenvolvido no curso
def verificar_evento(total, convidados):
    limit_pessoas = 100
    if total <= limit_pessoas and convidados <= 20:
        return "Evento Aprovado!"
    else:
        return "Capacidade Excedida."
        ` // Snippet Python extraído do PDF (Pág 16)
    },

    // Seção Tecnologias (Baseado no PDF)
    technologies: [
        {
            title: "Lógica de Programação",
            icon: "ph-brackets-curly", // Ícone Phosphor
            desc: "Fundamentos de algoritmos e pensamento computacional para iniciantes."
        },
        {
            title: "p5.js Criativo",
            icon: "ph-paint-brush",
            desc: "Introdução à programação visual e interativa com JavaScript."
        },
        {
            title: "Python",
            icon: "ph-code",
            desc: "Resolução de problemas reais e automação de tarefas."
        },
        {
            title: "Hardware & IoT",
            icon: "ph-circuitry",
            desc: "Estudos sobre sensores e microcontroladores (Micro:bit)."
        }
    ],

    // Seção Equipe (ADICIONE OS NOMES AQUI)
    team: [
        {
            name: "Raul Melo Farias",
            role: "Scrum Master & Apresentador & Desenvolvedor",
            avatar: "../assets/images/avatar1.jpeg",
            github: "https://github.com/raulmelof"
        },
        {
            name: "Arthur Vieira Xavier Pascoal",
            role: "Apresentador & Desenvolvedor",
            avatar: "../assets/images/avatar2.jpeg",
            github: "#"
        },
        {
            name: "Jonathan Zorzim Rodrigues",
            role: "Apresentador & Desenvolvedor",
            avatar: "../assets/images/avatar3.jpeg",
            github: "https://github.com/Cecchino9"
        },
        {
            name: "Bryan Ferreira Barboza",
            role: "Apresentador & Desenvolvedor",
            avatar: "../assets/images/avatar4.jpeg",
            github: "https://github.com/scarletsorceress"
        },
        {
            name: "Gabriel Vinícius Santos Rosa",
            role: "Apresentador & Desenvolvedor",
            avatar: "../assets/images/avatar5.jpeg",
            github: "https://github.com/Gabrielvi05"
        },
        // Adicione mais blocos {} se tiver mais gente
    ]
};