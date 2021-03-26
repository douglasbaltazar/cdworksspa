<template>
  <div id="dash" class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-4 col-md-3 sidebar">
        <b-card
          title="Filtros"
          tag="article"
          class="my-2"
          bg-variant="dark"
          text-variant="white"
        >
          <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
            <div class="row">
              <div class="col-12">
                <b-form-input
                  id="input-title"
                  v-model="filters.title"
                  type="text"
                  placeholder="Buscar pelo titulo"
                >
                </b-form-input>
              </div>
              <div class="col-12 my-3">
                <b-form-checkbox
                  id="checkbox-my-jobs"
                  v-model="filters.myJobs"
                  name="myJobs"
                  value="true"
                  unchecked-value="false"
                >
                  Meus Projetos
                </b-form-checkbox>
              </div>
              <div class="col-12">
                <b-button type="submit" variant="primary" size="lg" block
                  >Buscar</b-button
                >
                <b-button type="reset" variant="danger" size="sm" block
                  >Limpar</b-button
                >
              </div>
            </div>
          </b-form>
        </b-card>
      </div>
      <div class="col-12 col-sm-8 col-md-9 lista">
          <b-button class="float-right my-2" @click="() => $router.push('./jobs/new')" variant="success">Novo projeto</b-button>
          <h3>Projetos</h3>
          <hr>
          <div v-if="jobs && jobs.length > 0">
              <b-card v-for="job in jobs" :key="job.id" :title="job.title" :sub-title="job.Hirer.name" class="my-2" bg-variant="light">
                  <b-card-text>{{job.description}}</b-card-text>
                  <div class="row">
                      <div class="col-6">
                          <strong>Orçamento</strong>
                          R$ {{job.budget}}
                      </div>
                      <div class="col-6">
                          <strong>Propostas até: </strong>
                          {{job.deadline}}
                      </div>
                  </div>
                  <div class="text-right">
                      <hr>
                      <b-button variant="primary">Mais detalhes...</b-button>
                  </div>
              </b-card>
              <div class="actions text-center" v-if="pagination.count > 0">
                  <b-button variant="primary" @click="previous()" class="mr-2">Anterior</b-button>
                  <b-button variant="primary" @click="next()">Próximo</b-button>
              <p class="text-muted"><small>Do projeto PRIMEIRO_REGISTRO até ÚLTIMO_REGISTRO - Total de TOTAL_REGISTROS projetos</small></p>
              </div>
          </div>
          <div v-else>
              <span class="text-muted">Nenhum projeto encontrado...</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
          {
                id: 4,
                userId: 4,
                title:"Terste",
                description: "Teste teste teste",
                budget: 12345,
                deadline: "2019-10-26T12:21:04.000Z",
                selectedApplicationId: 2,
                createdAt: "2019-10-26T15:07:04.000Z",
                updatedAt: "2019-10-27T12:48:04.000Z",
                user_id: 4,
                Hirer: {
                    id: 4,
                    name: "Contratante",
                    description: null,
                    pic: null,
                    email: "contratante@gmail.com",
                    password: "asdasd",
                    createdAt: "2019-10-26T15:07:04.000Z",
                    updatedAt: "2019-10-27T12:48:04.000Z",
                },
                Skills: [
                    {
                        id: 15,
                        name: "JavaScript",
                        jobs_skills: {
                            createdAt: "2019-10-26T15:07:04.000Z",
                            updatedAt: "2019-10-27T12:48:04.000Z",
                        }
                    }
                ]
          }
      ],
      filters: {
        title: "",
        myJobs: false,
      },
      pagination: {
        offset: 0,
        limit: 5,
        count: 0,
      },
    };
  },
};
</script>

<style>
</style>