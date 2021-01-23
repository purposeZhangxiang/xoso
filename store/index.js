
export const state = () => ({
    layout: 'PC'
})
export const mutations = {
    changeLayout(state, data) {
        state.layout = data
    }
}