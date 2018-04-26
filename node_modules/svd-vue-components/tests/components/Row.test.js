import Vue from "vue/dist/vue.js";
import simulant from "simulant";
import TableComponent from "../../src/";

describe("TableComponent", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    TableComponent.settings({
      filterNoResults: "There are no matching rows"
    });
  });

  it("can mount", async () => {
    document.body.innerHTML = `
            <div id="app">
                <row center>
                    <column></column>
                </row>
            </div>
        `;

    await createVm();

    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it("can display nested properties", async () => {
    document.body.innerHTML = `
            <div id="app">
                <row center>
                    <column>
                        <row center>
                            <column></column>
                        </row>
                    </column>
                </row>
            </div>
        `;

    await createVm();

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});

async function createVm(options = {}) {
  const vm = new Vue({
    el: "#app",
    ...options
  });

  await Vue.nextTick(() => {});

  const rows = vm.$children[0];

  return rows;
}
