import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  currentId: '0',
  actions: {
    toggleModal: function(stuff1) {
      this.toggleProperty('isShowingModal');
      this.set('currentId', stuff1);
    },
    editEmpRec:function() {

      const eid = this.get('eId');
      const ename = this.get('eName');
      const edept = this.get('eDept');
      var datid= this.get('currentId');
      Ember.$.ajax({
        type: "POST",
        url: "http://localhost:8080/editEmp.do?empId=" + eid + "&empName=" + ename + "&empDept="+edept+"&dataId="+datid,
        data: {"username": "tomcat","password":"se3ret" }
      });
      this.toggleProperty('isShowingModal');
      this.transitionToRoute('index.view');
    }
  }
});
