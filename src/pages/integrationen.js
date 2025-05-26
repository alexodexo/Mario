import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";
import api from "@/utils/api";
import { BsFillTrash3Fill, BsQuestionCircle, BsPencilFill } from "react-icons/bs";

import { FaLink } from "react-icons/fa";

// Lazy Imports
const DeleteConfirmationModal = lazy(() => import("@/components/DeleteConfirmationModal"));
const MainButton = lazy(() => import("@/components/MainButton"));
const ErrorToast = lazy(() => import("@/components/ErrorToast"));
const AddIntegration = lazy(() => import("@/components/integrationen/AddIntegration"));
const NoIntegration = lazy(() => import("@/components/integrationen/NoIntegration"));
const EditIntegrationModal = lazy(() => import("@/components/integrationen/EditIntegrationModal"));

/* ─── Tooltip ──────────────────────────────────────── */
const Tooltip = ({ text }) => (
  <div className="group relative inline-flex items-center">
    <div className="text-gray-400 hover:text-[var(--accent-color)] cursor-help ml-1">
      <BsQuestionCircle size={14} />
    </div>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg 
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></div>
    </div>
  </div>
);

/* ─── Helper: Items extrahieren ────────────────────── */
const extractItems = (res) =>
  Array.isArray(res?.data) ? res.data : res?.data?.items ?? [];

/* ─── Framer‑Motion Variants ───────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
  hover: { scale: 1.02, boxShadow: "0px 4px 15px rgba(0,0,0,0.1)" },
};
const headerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 50 },
  },
};

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editIntegration, setEditIntegration] = useState(null);

  // Delete Modal state
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedIntegrationId, setSelectedIntegrationId] = useState(null);

  // AddIntegration Side‑Menu
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    document.title = "Integrationen - telefonieren.ai";
    fetchIntegrations();
  }, []);

  // Empty‑State Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmptyState(integrations.length === 0 && !loading);
    }, 500);
    return () => clearTimeout(timer);
  }, [integrations, loading]);

  /* ─── Integrationen laden ────────────────────────── */
  const fetchIntegrations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/integrations/user/", {
        params: { skip: 0, limit: 30 },
      });
      setIntegrations(extractItems(response));
    } catch (err) {
      console.error("Fehler beim Laden der Integrationen:", err);
      setError("Fehler beim Laden der Integrationen.");
    } finally {
      setLoading(false);
    }
  };

  /* ─── Hilfsfunktionen ────────────────────────────── */
  const formatDate = (ts) => (ts ? dayjs(ts).format("DD.MM.YYYY HH:mm") : "");

  const openDeleteModal = (id, e) => {
    e?.stopPropagation();
    setSelectedIntegrationId(id);
    setDeleteModalVisible(true);
  };

  const confirmDelete = async () => {
    try {
      if (!selectedIntegrationId) return;
      await api.delete(`/integrations/user/${selectedIntegrationId}`);
      setIntegrations((prev) => prev.filter((i) => i.id !== selectedIntegrationId));
    } catch (err) {
      console.error("Fehler beim Löschen:", err);
      setError("Fehler beim Löschen der Integration.");
    } finally {
      setDeleteModalVisible(false);
      setSelectedIntegrationId(null);
    }
  };

  const cancelDelete = () => {
    setDeleteModalVisible(false);
    setSelectedIntegrationId(null);
  };

  const handleEditIntegration = (integration, e) => {
    e?.stopPropagation();
    setEditIntegration(integration);
  };

  const handleUpdateIntegration = (updated) => {
    setIntegrations((prev) =>
      prev.map((i) => (i.id === updated.id ? { ...i, ...updated } : i))
    );
  };

  /* ─── Filtering ──────────────────────────────────── */
  const filteredIntegrations = integrations.filter((integration) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      integration.name?.toLowerCase().includes(q) ||
      integration.description?.toLowerCase().includes(q) ||
      integration.type?.toLowerCase().includes(q)
    );
  });

  /* ─── Render ─────────────────────────────────────── */
  return (
    <motion.div
      className="bg-[#EBF5EE] dark:bg-[#202938] text-[#1E152A] dark:text-slate-100 p-8 rounded-xl shadow-2xl min-h-full space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0"
        variants={itemVariants}
      >
        <div>

          <div className="flex items-center gap-3">
            <FaLink className="h-8 w-8 text-[var(--accent-color)]" />
            <h1 className="text-5xl font-bold text-[var(--accent-color)]">Integrationen</h1>
          </div>

          <motion.p
            className="text-gray-700 dark:text-gray-200 pl-1 mt-2"
            variants={itemVariants}
          >
            Verwalte deine angebundenen Integrationen
            <Tooltip text="Integrationen ermöglichen es deinen Agenten, auf externe Dienste und Datenquellen zuzugreifen." />
          </motion.p>
        </div>

        {/* Suche & Add‑Button */}
        <div className="flex flex-col md:flex-row items-end md:items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Suche */}
          <motion.div
            className="relative w-full md:w-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Integrationen durchsuchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </motion.div>

          <Suspense fallback={<div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />}>
            <MainButton
              onClick={() => setShowSideMenu(true)}
              text="+ Integration hinzufügen"
              className="hover:scale-105 transition-transform"
            />
          </Suspense>
        </div>
      </motion.div>

      {/* Ladezustand */}
      {loading && integrations.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative w-24 h-24">
            <motion.div
              className="absolute inset-0 rounded-full border-t-4 border-b-4 border-[var(--accent-color)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-10 h-10 text-[var(--accent-color)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
              </svg>
            </div>
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 font-medium">
            Integrationen werden geladen...
          </p>
        </div>
      )}

      {/* Empty‑State */}
      {showEmptyState && (
        <Suspense fallback={<div className="py-20 flex justify-center"><div className="w-12 h-12 border-4 border-[var(--accent-color)] border-t-transparent rounded-full animate-spin"></div></div>}>
          <NoIntegration onAddIntegration={() => setShowSideMenu(true)} />
        </Suspense>
      )}

      {/* Keine Treffer bei Suche */}
      {integrations.length > 0 && filteredIntegrations.length === 0 && (
        <motion.div
          className="text-center py-8 bg-white dark:bg-[#2D3645] rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Keine Ergebnisse gefunden</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Versuche, deine Suchanfrage zu ändern</p>
        </motion.div>
      )}

      {/* Integrationen‑Grid */}
      {integrations.length > 0 && filteredIntegrations.length > 0 && (
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" variants={itemVariants}>
          {filteredIntegrations.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              custom={idx}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="bg-white dark:bg-[#2D3645] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 transition-all relative overflow-hidden"
            >
              <div className="relative z-10">
                {/* Header in Card */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white text-xl font-bold">
                      {item.name ? item.name.charAt(0) : "I"}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {item.name || "Unbenannte Integration"}
                      </h2>
                      {item.type && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          {item.type}
                        </span>
                      )}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => openDeleteModal(item.id, e)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-md hover:bg-red-100 dark:hover:bg-red-900/20"
                    title="Integration löschen"
                  >
                    <BsFillTrash3Fill size={18} />
                  </motion.button>
                </div>

                {/* Beschreibung */}
                <div className="mt-4">
                  {item.description ? (
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-400 dark:text-gray-500 italic mb-4">
                      Keine Beschreibung vorhanden
                    </div>
                  )}
                </div>

                {/* Footer in Card */}
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Aktualisiert: {formatDate(item.updated_at)}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => handleEditIntegration(item, e)}
                    className="text-[var(--accent-color)] text-sm font-medium hover:text-[var(--accent-color)]/80 flex items-center"
                  >
                    <BsPencilFill size={14} className="mr-1" />
                    <span>Bearbeiten</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Edit‑Integration Modal */}
      <AnimatePresence>
        {editIntegration && (
          <Suspense fallback={<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"><div className="p-4 bg-white dark:bg-[#2D3645] rounded-xl shadow-xl"><div className="w-8 h-8 border-4 border-[var(--accent-color)] border-t-transparent rounded-full animate-spin mx-auto"></div></div></div>}>
            <EditIntegrationModal
              integration={editIntegration}
              onClose={() => setEditIntegration(null)}
              onUpdate={handleUpdateIntegration}
            />
          </Suspense>
        )}
      </AnimatePresence>

      {/* Delete‑Confirm Modal */}
      <Suspense fallback={<div />}>
        <DeleteConfirmationModal
          show={deleteModalVisible}
          title="Integration löschen"
          message="Möchtest du diese Integration wirklich löschen?"
          subMessage="Diese Aktion kann nicht rückgängig gemacht werden."
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      </Suspense>

      {/* Fehleranzeige */}
      <Suspense fallback={<div />}>
        <ErrorToast message={error} onClose={() => setError(null)} />
      </Suspense>

      {/* Side‑Menu zum Hinzufügen */}
      <Suspense fallback={<div />}>
        <AddIntegration
          showSideMenu={showSideMenu}
          setShowSideMenu={setShowSideMenu}
          onIntegrationAdded={(newIntegration) => setIntegrations([...integrations, newIntegration])}
        />
      </Suspense>
    </motion.div>
  );
}
